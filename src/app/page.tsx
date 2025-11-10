import { Submenu } from "@/components/home/submenu/page";
import { getDataHome } from "@/utils/actions/get.data";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero/page";
import { Services } from "@/components/home/services/page";
import { Container } from "@/components/container/page";
import { Footer } from "@/components/home/footer/page";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <div>
      <main>
        <Submenu />
        <Hero
          heading={object.metadata.heading}
          bannerUrl={object.metadata.banner.url}
        />
        <Container>
          <Services object={object} />
          <Footer object={object} />
        </Container>
      </main>
    </div>
  );
}
