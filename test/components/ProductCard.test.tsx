import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/products';

const { act } = renderer;

describe('ProducCard', () => {
    
    test('debe de mostrar el componente correctamente', 
    () => {
        const wrapper = renderer.create(
            <ProductCard product= { product1 }>
                {
                    () => (
                        <h1> Product Card </h1>
                    )
                }
            </ProductCard>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    }); 

    test('Debe incrementar el contador', () => {
        const wrapper = renderer.create(
            <ProductCard product= { product1 }>
                {
                    ({ count, increaseBy }) => (
                        <> 
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button
                                onClick={ () => increaseBy(1) }
                            ></button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();
        
        //este que viene de renderer se usa para que actue el cambio 
        //del state y no de el error de que no esta envuelto en un act
        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();

        expect( (tree as any).children[1].children[0]).toBe('1');
        
    })
    
    
})

