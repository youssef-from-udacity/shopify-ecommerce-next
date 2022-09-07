
import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Hero
       headline="Style Elevated: Your Ultimate Fashion Destination Awaits!"
       description="Step into a world where style meets convenience. Discover the latest trends and timeless classics at Fashionably Yours. From casual chic to red-carpet glamour, we've got your wardrobe covered. Browse our curated collections and elevate your style effortlessly.
       Indulge in luxury with Chic Couture Boutique. Immerse yourself in a world of sophistication and elegance. Our carefully curated selection of high-end fashion pieces ensures that you make a statement wherever you go. Elevate your wardrobe with our exclusive designs and impeccable craftsmanship."
      />
      <Marquee>
        { products.slice(0,6).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
      <Grid layout="B">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Marquee variant="secondary">
        { products.slice(0,6).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
    </>
  )
}
