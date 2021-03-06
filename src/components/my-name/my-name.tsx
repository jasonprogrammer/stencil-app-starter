import { Component, Method, Prop } from '@stencil/core';


@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() first: string;

  @Prop() last: string;

  @Method()
  test() {
      console.log('test!');
  }

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}

window.addEventListener('load', function() {
    console.log('in onload');
    const component = document.querySelector('my-name');
    component['test']();
})

