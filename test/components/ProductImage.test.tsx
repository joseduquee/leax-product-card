import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/products';
import React from 'react';


describe('ProductImage', () => {
    
    test('Debe crear el componente correctamente con la imagen personalizada', () => {
        
        const wrapper = renderer.create(
            <ProductImage img="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg" /> 
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('Debe crear el componente correctamente con la imagen del producto', () => {
        
        const wrapper = renderer.create(
            <ProductImage img={ product2.img } /> 
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
    

})
