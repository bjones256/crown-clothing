import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionsOverview from '../../Components/CollectionsOverview/collections-overview.component';
import CollectionPage from '../Collection/collection.component';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
// import { updateCollections } from '../../redux/shop/shop.actions';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../Components/WithSpinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    // state = {
    //     loading: true
    // };
    
    // unsubscribeFromSnapshot = null;

    componentDidMount(){
const { fetchCollectionsStartAsync } = this.props;
fetchCollectionsStartAsync()

        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections');
        
        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({
        //         loading:false
        //     })
        // })

        //the above is now moved into into redux

        // I currently like the below process better. It keeps the connection open similar to sockets. If I add a product to the backend it automatically updates the front end.
        
        // collectionRef.onSnapshot( async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({
        //         loading:false
        //     })
        // })
    }
    render(){
        const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;
        // const { loading } = this.state;
        return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} 
                render = {(props) => 
                <CollectionOverviewWithSpinner
                isLoading={isCollectionsFetching}
                {...props}
                />
                }
            />
            <Route path={`${match.path}/:collectionId`} 
                render = {(props) => 
                <CollectionPageWithSpinner
                isLoading={!isCollectionsLoaded}
                {...props}
                />
                }
            />
        </div>
    )}
}  

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);