# LEax-Product-Car

Este es un paquete de pruebas de despligues en NPM

### Alexander Duque

## Ejemplos

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from 'leax-product-car'
```


```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ( { reset, count, increaseBy, isMaxCountReached, maxCount } ) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
```