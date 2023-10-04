function Sasita(){
    return (
        function add (){
            let addition = [{
                name: "MBs",
                amount: 25000,
                data: "Mango 4G",
                status: "Complete"
            }];
            console.log(`${addition[0].name} ${addition[0].amount} ${addition[0].data} ${addition[0].status}`);
        }
        
    )
}

export default Sasita

