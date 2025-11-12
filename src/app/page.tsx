import { Submenu } from "@/components/home/submenu/page";
import { getDataHome, getSubMenu } from "@/utils/actions/get.data";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero/page";
import { Services } from "@/components/home/services/page";
import { Container } from "@/components/container/page";
import { Footer } from "@/components/home/footer/page";
import { MenuProps } from "@/menu.type";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  return (
    <div>
      <main>
        {menu.objects.length > 0 && <Submenu menu={menu} />}
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
