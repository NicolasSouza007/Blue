export interface PostProps {
  objects: objectPost[];
}

interface objectPost {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    button: {
      title: string;
      url: string;
    };
    description: {
      title: string;
      text: string;
      banner: {
        url: string;
      };
      button_active: Boolean;
      button_title: string;
      button_url: string;
    };
  };
}
// https://api.cosmicjs.com/v3/buckets/spider-production/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=buKB1W23v4IDKwey4AVUIbpJoQJjXq7DRpBQHSw96AJvevBBgs&depth=1&props=slug,title,metadata,type,
