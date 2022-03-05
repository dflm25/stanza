/**
 * This source code is the confidential, proprietary information of
 * Stanza, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Stanza.
 *
 * Stanza
 * All Rights Reserved.
 */

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as globalActions from '../../redux/stores/app/actions';
import * as eventActions from '../../redux/stores/events/actions';

// Component
import View from './view';

/**
 * Map state to props
 * @returns { object }
 */
export const mapStateToProps = (state) => ({
  loading: state.Global.loading,
});

/**
 * Map dispatch to props
 * @param dispatch - Run the  process to execute in the action
 * @returns { object }
 */
export const mapDispatchToProps = (dispatch) => ({
  globalAction: bindActionCreators(globalActions, dispatch),
  eventActions: bindActionCreators(eventActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
