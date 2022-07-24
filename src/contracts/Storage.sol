pragma solidity 0.5.0;

contract Storage {
    struct FileHash {
        string fileHash;
        string fileName;
    }
    uint256 public fileCount = 0;
    mapping(uint256 => FileHash) public Files;

    function set(string memory _fileHash, string memory _fileName) public {
        fileCount++;
        Files[fileCount] = FileHash(_fileHash, _fileName);
    }

    function getFileHash(uint256 _count) public view returns (string memory) {
        return Files[_count].fileHash;
    }

    function getFileName(uint256 _count) public view returns (string memory) {
        return Files[_count].fileName;
    }

    function getCount() public view returns (uint256) {
        return fileCount;
    }
}
