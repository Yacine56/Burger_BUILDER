import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {BurgerBuilder }from './BurgerBuilder'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'


configure({adapter:new Adapter()})

describe('<BurgerBuilder />',()=>{
    let wrapper
    beforeEach(()=>{
       wrapper=shallow(<BurgerBuilder  onFetchingIngredients={()=>{}}/>)
    })

    it('should render BuildControls',()=>{
        wrapper.setProps({ingredient:{Salad:0}})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})