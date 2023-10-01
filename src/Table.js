import React from "react";

export default function Table() {
  return (
    <div className="container">
      <table  className="TableHead"style={{ border: "1px solid black", width: "100%" }}>
        <thead style={{ backgroundColor: "#8bcaf3" }}>
          <tr className="col">
            <th className="col-2"> <strong>Docket No </strong></th>
            <th className="col-2" ><strong>From </strong> </th>
            <th className="col-2" ><strong>To </strong></th>
            <th className=" col-2" ><strong>Status </strong></th>
            <th className="col-2"><strong>Action </strong></th>
          </tr>
        </thead>
        <tbody className="col">
            <tr>
                <td>L123456789</td>
                <td>BLR</td>
                <td>KER</td>
                <td><button type="button" id="BTN-1" style={{float: "left"}}  className="btn btn-secondary ">Consignment Booked</button></td>
                <td><i className="bi bi-grid"></i></td>
            </tr>
            <tr>
                <td>L123456789</td>
                <td>BLR</td>
                <td>KER</td>
                <td><button type="button" id="BTN-2" style={{float: "left"}}  className="btn btn-secondary ">Consignment Booked</button></td>
                <td><i className="bi bi-grid"></i></td>
            </tr>
            <tr>
                <td>L123456789</td>
                <td>BLR</td>
                <td>KER</td>
                <td><button type="button"id="BTN-3" style={{float: "left"}} className="btn btn-danger ">In Transit</button></td>
                <td><i className="bi bi-grid"></i></td>
            </tr>
            <tr>
                <td>L123456789</td>
                <td>BLR</td>
                <td>KER</td>
                <td><button type="button" id="BTN-4" style={{float: "left"}} className="btn btn-primary ">Out for Delivery</button></td>
                <td><i className="bi bi-grid"></i></td>
            </tr>
            <tr>
                <td>L123456789</td>
                <td>BLR</td>
                <td>KER</td>
                <td><button type="button" id="BTN-5" style={{float: "left"}}  className="btn btn-success ">Delivered Successfully</button></td>
                <td><i className="bi bi-grid"></i></td>
            </tr>


        </tbody>
      </table>
    </div>
  );
}
