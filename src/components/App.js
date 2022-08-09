import React, { Component } from "react";
import logo from "../logo.png";
import "./App.css";
import Web3 from "web3";
import Storage from "../abis/Storage.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./Upload";
import Download from "./Download";
import Home from "./Home";

const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockChainData();
  }

  async loadBlockChainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Storage.networks[networkId];

    if (networkData) {
      const abi = Storage.abi;
      const address = networkData.address;
      const contract = web3.eth.Contract(abi, address);
      this.setState({ contract });
      const fileCountPromise = contract.methods.getCount().call();

      let count = 0;
      fileCountPromise.then((result) => {
        count = parseInt(result["_hex"], 16);
        for (let i = 0; i <= count; i++) {
          const fileHashpromise = contract.methods.getFileHash(i).call();
          const fileNamepromise = contract.methods.getFileName(i).call();
          fileHashpromise.then((result) => {
            this.setState({
              fileHash: this.state.fileHash.concat([result]),
            });
          }, null);
          fileNamepromise.then((result) => {
            this.setState({
              fileName: this.state.fileName.concat([result]),
            });
          }, null);
        }
      }, null);
    } else {
      window.alert("Smart contract not deployed to the network");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      buffer: null,
      contract: null,
      account: "",
      singleName: "",
      fileHash: [],
      fileName: [],
      filelen: 5,
    };
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Please use Metamask");
    }
  }
  captureFile = (event) => {
    event.preventDefault();
    console.log("file captured..");

    const file = event.target.files[0];
    const reader = new window.FileReader();
    this.setState({ singleName: file["name"] });
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      console.log(this.state.fileName.length);
      this.setState({ buffer: Buffer(reader.result) });
      this.setState({
        fileName: this.state.fileName.concat(file["name"]),
      });
    };
  };
  onSubmit = (event) => {
    this.setState({ filelen: this.state.filelen + 1 });
    event.preventDefault();
    console.log("Submitting the form..");
    ipfs.add(this.state.buffer, (error, result) => {
      const fileHash = result[0].hash;
      this.setState({ fileHash: this.state.fileHash.concat([fileHash]) });
      if (error) {
        console.error(error);
        return;
      }
      this.state.contract.methods
        .set(fileHash, this.state.singleName)
        .send({ from: this.state.account });
    });
  };
  onDownload = () => {
    // /console.log(this.state.fileHash);
  };
  render() {
    return (
      <body>
        <Router>
          <Routes>
            <Route path="/Download" element={<Download />} />
            <Route path="/Upload" element={<Upload />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </body>
    );
  }
}

export default App;
