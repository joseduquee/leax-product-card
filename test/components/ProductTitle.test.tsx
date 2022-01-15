import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';

describe('ProducTitle', () => {
    
    test('debe de mostrar el componente correctamente con el personalizado titulo', 
    () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className='custom-class'/>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });

    test('debe de mostrat el componente con el nombre del producto', 
    () => {
        const wrapper = renderer.create(
            <ProductCard product= { product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
    
    
})

