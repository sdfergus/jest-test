import { shallowMount } from '@vue/test-utils'
var util = require( 'util' );
var encoder = new util.TextEncoder( 'utf-8' );

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: [ 'msg' ]
}

describe( 'MessageComponent', () => {
  it( 'renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount( MessageComponent, {
      propsData: { msg }
    } )
    expect( wrapper.text() ).toMatch( msg )
  } )
} )