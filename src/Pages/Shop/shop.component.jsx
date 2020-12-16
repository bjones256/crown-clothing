import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../Components/CollectionsOverview/collections-overview.container';

import CollectionPageContainer from '../Collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';



// class ShopPage extends React.Component{
const ShopPage =({ match, fetchCollectionsStart }) => {
     
 useEffect(() =>{
    fetchCollectionsStart()
 },[fetchCollectionsStart])

//  Below is a test for unmount -- it worked
//  useEffect(() => {
//     console.log('Im subscribing')
//     const unsubscribeFromAuth = () => { console.log("Im' unsubscribed");}
//     return () => {
//       unsubscribeFromAuth()
//     }
//   },[])


//     componentDidMount(){
// const { fetchCollectionsStart } = this.props;
// fetchCollectionsStart()
//     }

    // render(){
        // const { match } = this.props;
        return(
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`} 
                component={CollectionsOverviewContainer}
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
            />
        </div>
    )}
// }  

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);