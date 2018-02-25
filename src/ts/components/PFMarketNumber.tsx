import React = require('react');
import '../../css/pf-summary.less';
import classNames = require('classnames');
import {formatGainOrLoss} from '../util';

type Props = {
  current: number,
  previous: number,
  showGreenOnNeutral?: boolean, // default is false.
  showPercent?: boolean, // default is true
  showCurrentValue?: boolean, // default is false
};

export class PFMarketNumber extends React.Component<Props> {

  render() {
    let isProfit = this.props.current - this.props.previous > 1e-6;
    const isLoss = this.props.current - this.props.previous < -1e-6;
    if (!isProfit && !isLoss && this.props.showGreenOnNeutral === true) {
      isProfit = true;
    }
    return (
      <div
        className={classNames({'pf-color-red': isLoss, 'pf-color-green': isProfit})}>
        {formatGainOrLoss(this.props.current, this.props.previous, {
          showPercent: this.props.showPercent !== false,
          showCurrentValue: this.props.showCurrentValue
        })}
      </div>
    );
  }
}
