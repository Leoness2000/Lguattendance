import {useEffect,useState} from "react";
import API from "../services/api";

function Employees(){

const [employees,setEmployees] = useState([]);

useEffect(()=>{

fetchEmployees();

},[])

const fetchEmployees = async ()=>{

const res = await API.get("/employees");

setEmployees(res.data);

}

return(

<div>

<h1>Employees</h1>

<table>

<thead>

<tr>

<th>Name</th>
<th>Email</th>
<th>Department</th>

</tr>

</thead>

<tbody>

{employees.map(emp=>(
<tr key={emp._id}>
<td>{emp.name}</td>
<td>{emp.email}</td>
<td>{emp.department}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Employees;