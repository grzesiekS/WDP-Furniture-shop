import { connect } from 'react-redux';

import ProductBox from './ProductBox.js';

import { createActionAddToCompare } from '../../../redux/comprasionRedux';
import { getCurrency } from '../../../redux/currencyRedux';
import { addProduct } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  currency: getCurrency(state),
});
const mapDispatchToProps = dispatch => ({
  addToCompare: (name, id, image) =>
    dispatch(createActionAddToCompare({ name, id, image })),
  addProduct: productId => dispatch(addProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
