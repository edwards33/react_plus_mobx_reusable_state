import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';


export class FieldState {
  @observable
  value = '';

  @action
  onChange(newValue: string) {
    this.value = newValue;
  }
}


@observer
export class FieldInput extends React.Component<{ fieldState: FieldState }>{
  render() {
    return (
      <input
        value={this.props.fieldState.value}
        onChange={
          (e) => this.props.fieldState.onChange(e.target.value)
        }
      />
    );
  }
}
