import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

// import axios from 'utils/axios';
import { Page, SearchBar } from '../../../components';
import { Header, Results } from './components';
import useStyles from './style';
class UserList extends Component
{
    
    render() {

    // const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     let mounted = true;

    //     const fetchOrders = () => {
    //         // axios.get('/api/orders').then(response => {
    //         //     if (mounted) {
    //         //         setOrders(response.data.orders);
    //         //     }
    //         // });
    //     };

    //     fetchOrders();

    //     return () => {
    //         mounted = false;
    //     };
    // }, []);

    return (
        <Page
            className={this.props.classes.root}
            title="User Management List"
        >
            <Header />
            <SearchBar />
            <Results
                className={this.props.classes.results}
                orders={[]} //
            />
        </Page>
        );
    }
}
export default withStyles(useStyles)(UserList);
