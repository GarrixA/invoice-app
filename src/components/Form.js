function Form () {
    return (
       <div>
            <form >
                {/* <div></div> */}
            <label for="fname">name</label><br/>
            <input type="text" id="fname" name="fname" placeholder="name"/><br/>
            <label for="lname">Amount</label><br/>
            <input type="number" /><br/>
            <label for="lname">Data</label><br/>
            <input type="number" /><br/><br/>
            <select id="cars" name="cars">
                <option value="volvo">Complete</option>
                <option value="saab">Pending</option>
                <option value="mercedes">Processing</option>
                <option value="audi">Postponed</option>
            </select>
            <input type="submit" value="Submit"/>
        </form>
       </div>
    )
}

export default Form