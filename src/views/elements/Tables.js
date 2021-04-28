import React, {Component} from 'react';
import {
  Card,
  CardBody,
  Table
} from 'reactstrap';

class TablePage extends Component {
  render() {
    return (
        <Card>
            <CardBody>
                Basic Table
                <Table>
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>SEDAN</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>SUV</td>
                            
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>HATCHBACK</td>
                            
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>MICRO</td>
                           
                        </tr>
                    </tbody>
                </Table>
               
            </CardBody>
        </Card>
    )
  }
}

export default TablePage;
