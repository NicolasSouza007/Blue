export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
      };
      heading: string;
      about: {
        description: string;
        banner: {
          url: string;
        };
      };
      hq: HQProps[];
      contact: {
        email: string;
        fone: string;
        address: string;
      };
    };
  };
}

interface HQProps {
  banner: {
    url: string;
  };
  description: string;
}
