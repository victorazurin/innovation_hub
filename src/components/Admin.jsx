import React from 'react';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import { marginMedium, textCenter } from '../styles';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Table, Column, Cell} from 'fixed-data-table';

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          rows : [{"id":1,"name":"William Elliott","email":"welliott0@bvw.com","status":"Active"},
                  {"id":2,"name":"Carl Ross","email":"cross1@bvw.com","status":"Active"},
                  {"id":3,"name":"Jeremy Scott","email":"jscott2@bvw.com","status":"Active"},]
                  // more data
          };
    }

    handleSelect(index, last) {
       console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }

    render() {

      return (
        <div>
          <Card className="container"  style={marginMedium}>
              <CardTitle title="Administration Page"
              subtitle="This is a restrict page."
              style={textCenter}/>

              <Tabs onSelect={this.handleSelect} selectedIndex={0}>

              <TabList>
               <Tab>User List</Tab>
               <Tab>Reports</Tab>
               <Tab>Dashboard</Tab>
             </TabList>

              <TabPanel>
                 <h3>Displaying list of users</h3>

                 <Table
                   height={40+((this.state.rows.length+1) * 30)}
                   width={550}
                   rowsCount={this.state.rows.length}
                   rowHeight={30}
                   headerHeight={30}
                   rowGetter={function(rowIndex) {return this.state.rows[rowIndex]; }.bind(this)}>
                   <Column dataKey="id" width={50} label="Id" />
                   <Column dataKey="name" width={200} label="Name" />
                   <Column dataKey="email" width={200} label="e-mail" />
                   <Column dataKey="status" width={100} label="Status" />
                 </Table>;
               </TabPanel>

               <TabPanel>
                 <h3>Displaying complaints reported by users</h3>
               </TabPanel>

               <TabPanel>
                 <h3>Displaying Dashboard status</h3>
               </TabPanel>
            </Tabs>
         </Card>

        </div>

      );
    }
}

export default Admin;