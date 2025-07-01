import Table from "react-bootstrap/Table";

function Child({ userData }) {
  // const {userData} = props
  // console.log(userData)
  // function Print(){
  //       return(

  //       )
  // }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Country</th>
          <th>Stutus</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((item) => (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.country}</td>
            <td>{item.isActive?"Subscribed":"Not Subscribed"}</td>
         </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Child;
