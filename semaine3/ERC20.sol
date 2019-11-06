pragma solidity 0.5.11;
/* by Tim S. */
interface IERC20{
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract ERC20 is IERC20{
    
    string public name = "ERC20 TokTok";
    string public symbol = "TT";
    address owner;
    uint256 private totalsupply;
    mapping(address => uint256) private balance;
    mapping (address => mapping (address => uint256)) private allowances; 
    
    constructor() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
  
    
    function totalSupply() external view returns (uint256){      
        return totalsupply;
    }
    
    function balanceOf(address _account) external view returns (uint256){
        return balance[_account];
    }
    
    function transfer(address _to, uint256 _amount) external returns (bool){
        require(msg.sender != address(0), "ERC20: transfer from the zero address");
        require(_to != address(0), "ERC20: transfer to the zero address");
        require(balance[msg.sender] >= _amount, "Amount pas correct");
        
        balance[msg.sender] -= _amount;
        balance[_to] += _amount; 
        
        emit Transfer(msg.sender, _to, _amount);
    }
    
    function allowance(address _spender) external view returns (uint256){
        return allowances[msg.sender][_spender];
    }
    
    function approve(address _spender, uint256 _amount) external returns (bool){
        require(msg.sender != address(0), "ERC20: approve from the zero address");
        require(_spender != address(0), "ERC20: approve to the zero address");
        
        allowances[msg.sender][_spender] = _amount;
        
        emit Approval(msg.sender, _spender, _amount);
    }
        
    function transferFrom(address _from, address _to, uint256 _amount) external returns (bool){
        require(_from != address(0), "ERC20: transfer from the zero address");
        require(_to != address(0), "ERC20: transfer to the zero address");
        require(allowances[_from][msg.sender] >= _amount, "Amount incorrect");
        require(balance[_from] >= _amount, "Amount bis incorrect");
        
        balance[_from] -= _amount;
        balance[_to] += _amount;
        allowances[_from][msg.sender] -= _amount;
        emit Transfer(_from, _to, _amount);           
    }
    
    function mint(uint256 amount) public onlyOwner{
        totalsupply += amount;
        balance[msg.sender] += amount; 
        emit Transfer(msg.sender, msg.sender, amount);
    }
    
  


    
}