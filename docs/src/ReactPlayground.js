import React from 'react';
import Row from '../../src/Row';

class ReactPlayground extends React.Component {
  static propTypes = {
    code: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.trancate = this.truncate.bind(this);
  }

  render() {
    var {name, code, ...props} = this.props;
    return (
      <div className='playground s12'>
        <Row>
            {this.props.children}
        </Row>
        <Row>
            <div className='s12'>
                <pre><code className='language-markup'>
                {this.truncate(this.props.code)}
                </code></pre>
            </div>
        </Row>
      </div>
    );
  }

  truncate(code) {
    var regex = /(<(.|\n)*>);/;
    var m = code.match(regex);
    if (m) {
      return m[1];
    }
    return "code no match";
  }
}

export default ReactPlayground;
