import React, { Component } from "react";
import logo from "../upload.png";
import "./App.css";
import Web3 from "web3";
import Storage from "../abis/Storage.json";
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

  //Get the account
  //Get the network
  //Get the contract
  //Get the FileHash

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
              fileHash: this.state.fileName.concat([result]),
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
      this.setState({ buffer: Buffer(reader.result) });
      this.setState({
        fileName: this.state.fileName.concat(file["name"]),
      });
    };
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting the form..");
    ipfs.add(this.state.buffer, (error, result) => {
      const fileHash = result[0].hash;
      console.log(this.state.singleName);
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
    console.log(this.state.fileName);
    console.log(this.state.fileHash);
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Dstorage
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white">
                Account: {this.state.account}
              </small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                    width="200"
                    height="200"
                  />
                </a>

                <h2>Upload file to network</h2>
                <form onSubmit={this.onSubmit}>
                  <input type="file" onChange={this.captureFile} />
                  <input type="submit"></input>
                </form>

                <button type="button" onClick={this.onDownload}>
                  Download
                </button>
              </div>
              <div></div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
