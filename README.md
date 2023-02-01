Introduction:
-------------
Client-side application provides the interface between IPFS and Blockchain. Users can upload and download files using this client side application. Metamask connects the user to the network. Blockchain can be accessed through it. Ganache is a private testing Ethereum network. Actual network uses real currency, so to emulate a real network, this project uses Ganache. Ethereum network acts as a decentralized database to store file hash data along with file name. IPFS(Inter planetary file system) is a decentralized storage provider with thousands of nodes scattered across the world. These nodes are people offering their extra storage in exchange for some payment.  IPFS while handling the file storing part. It will fragment the file into multiple fragments and store it in different nodes across the network . A unique hash is generated for each file. This hash uniquely identifies the files. It is generated using the fragments. These hashes along with file names will be stored in the blockchain for this project so as to make our database decentralized. Users will be shown every file which they have uploaded. This data is fetched from blockchain. Users can download their required file. Hash of the required file will be passed to the IPFS. IPFS will fetch the file. File will be downloaded on the user's device. This way we achieve complete decentralization.

-------------------------------------------------------------------------------------------------------------------------------------------------------
Methodlogy:
------------
<img width="396" alt="image" src="https://user-images.githubusercontent.com/62991898/216041285-3d57cf75-168b-458f-b0fa-6285ff13fce4.png">      
<img width="468" alt="image" src="https://user-images.githubusercontent.com/62991898/216041330-0dde3f54-0b04-42fc-a2df-0c422fe547c7.png">





<img width="439" alt="image" src="https://user-images.githubusercontent.com/62991898/216041349-2e546391-ac8c-46a5-8136-886ccebd7199.png">


<img width="340" alt="image" src="https://user-images.githubusercontent.com/62991898/216041365-0ec07c41-953d-4e7a-80b4-0435dd579463.png">

-------------------------------------------------------------------------------------------------------------------------------------------------------
Programming Language Selection:
--------------------------------
•	CSS 
--------
CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs, variations in display for different devices and screen sizes as well as a variety of other effects. 

•	React
--------
The user interface is built using React. React works by creating stateful and stateless components. Stateful components hold data whereas stateless components merely perform functions and therefore are often implemented as functions rather than classes. For our single page web app, the highest level 5 class, the App class, holds all the relevant pages. Each page is then just a component and rendered as needed as the user interacts with the application. For the text inputs, buttons, and other common inputs, the implementation is rather straightforward; however, the Google Maps component becomes rather tricky. Currently, the module refreshes after every click on the map which re-renders not only the current page, but also the Map component. This becomes a problem for slower networks. However, the utility of being able to click on the map over typing in the desired address is worth it in the short term.

• JavaScript
 -----------
JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. In this project Javascript is used for getting files from users, encryption, decryption, fragmentation, Assembling the files, displaying the files.

•	Solidity
------------
Solidity is an object-oriented programming language created specifically by the Ethereum Network team for constructing and designing smart contracts on Blockchain platforms. It's used to create smart contracts that implement business logic and generate a chain of transaction records in the blockchain system

-------------------------------------------------------------------------------------------------------------------------------------------------------

Platform Selection:
-------------------

To make the application accessible to every user. application is developed as a website. NodeJS is used for backend and ReactJS for frontend. The Ethereum network will host Blockchain. Metamask wallet provides easy access to wallet credentials.

•	Node Package Manager
----------------------
The world's biggest software registry is npm. All continent's open-source developers use npm to exchange and borrow packages, while many businesses use npm to oversee private development. It places modules where node can find them and intelligently handles dependency issues. It can be highly customized to support a range of use cases. It is mostly used to publish, find, install, and create node programs. 

•	Ganache
---------
To create a private Ethereum Blockchain for testing Solidity contracts Ganache is used. In contrast to Remix, it offers greater features.  Ganache provides for 10 accounts with 100 Ethereum each, which can be used for testing purpose. It provides for a local blockchain to run the blockchain projects. Ganache also provides features to view each transaction, and the hash values of each block created. The RPC URL must be used in order to access this local blockchain to develop the project.

•	Visual Studio Code
---------------------
Microsoft created the source-code editor known as Visual Studio Code, often known as VS Code, for Windows, Linux, and macOS. Debugging support, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git are among the features. The theme, keyboard shortcuts, options, and extensions that offer more functionality can all be changed by users. It provides a long list of addable extensions and plugins to make it easy to develop the project and deploy it.

•	Metamask
  --------
Metamask is a software cryptocurrency wallet that uses software to communicate with the Ethereum blockchain. Users can utilize a browser extension or mobile app to access their Ethereum wallet, which can then be used to connect with decentralized applications. With Metamask, users may send and receive Ethereum-based cryptocurrencies and tokens, broadcast transactions, store and manage account keys, and securely connect to decentralized applications using a suitable web browser or the built-in browser of the mobile app.

•	IPFS
-------
In a distributed file system, data is stored and shared using the InterPlanetary File System (IPFS), a protocol and peer-to-peer network. To uniquely identify each file in a global namespace spanning all computing devices, IPFS leverages content-addressing. Similar to BitTorrent, IPFS enables users to host and receive content. A durable system of file storage and sharing is created by IPFS, which is structured around a decentralized system of user-operators who each hold a piece of the total data. Other peers in the network can locate and request that content from any node who has it using a distributed hash table, and any user in the network can serve a file by its content address (DHT)

•	Truffle Suite
  --------------
On the Ethereum network, applications can be created, tested, and deployed using the truffle framework. The Truffle Framework consists of three main development frameworks dubbed Truffle, Ganache, and Drizzle for Ethereum smart contract and decentralized application (dApp) development. Truffle provides for template for creating smart contracts, enables to compile it and also deploy it on the ganache blockchain.

-------------------------------------------------------------------------------------------------------------------------------------------------------

Implementation:

<img width="423" alt="image" src="https://user-images.githubusercontent.com/62991898/216041409-a3c08d1b-e3ff-4071-891f-8d21a0f61e3e.png">


<img width="425" alt="image" src="https://user-images.githubusercontent.com/62991898/216041424-cb11f718-d284-40b6-b113-5f33f996dd18.png">


<img width="422" alt="image" src="https://user-images.githubusercontent.com/62991898/216041437-6559e69c-3c8b-40e9-9f29-cec04f906c84.png">


<img width="421" alt="image" src="https://user-images.githubusercontent.com/62991898/216041453-9fc4baf7-9bdb-4023-97be-6daaf3b5daaa.png">

-------------------------------------------------------------------------------------------------------------------------------------------------------

Summary:
---------

The proposed system achieved the goal of making a decentralized storage system for the end used to store their data in a network which is trustable and is faster than before. But there are some limitations. 
To achieve decentralization, we’ve multiple machines as nodes to store the data. If we have fewer nodes, then the system will be exactly the same as a centralized system because there will not be enough nodes to store fragmented data. Due to this reason, the benefit of using a decentralized network is lost. Due to the decentralized fashion, some illegal files can be stored on the network like copyrighted movies, music, games etc. and it’ll become almost impossible to remove that file. In the future, we can use multiple compression algorithms in order to compress our files. Multiple networks can be explored in future which are less computational.

