export interface Podcast {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
}

export interface Image {
    label: string;
}

export interface Attributes {
    ["im:id"]: string;
    term: string;
    scheme: string;
    label: string;
}

export interface Category {
    attributes: Attributes;
}

export interface Id {
    attributes: Attributes,
    label: string;
}

export interface ImArtist {
    label: string;
}

export interface ImContentTypeAttributes {
    term: string;
    label: string;
}

export interface ImContentType {
    attributes: ImContentTypeAttributes;
}

export interface ImName {
    label: string;
}

export interface ImPriceAttributes {
    amount: string;
    currency: string;
}

export interface ImPrice {
    label: string;
    attributes: ImPriceAttributes;
}

export interface ImReleaseDateAttributes {
    label: string;
}

export interface ImReleaseDate {
    label: string;
    attributes: ImReleaseDateAttributes;
}

export interface LinkAttributes {
    rel: string;
    type: string;
    href: string;
}

export interface Link {
    attributes: LinkAttributes;
}

export interface Rights {
    label: string;
}

export interface Summary {
    label: string;
}

export interface Title {
    label: string;
}

export interface Entry {
    category: Category;
    id: Id;
    ["im:artist"]: ImArtist;
    ["im:contentType"]: ImContentType;
    ["im:image"]: Image[];
    ["im:name"]: ImName;
    ["im:price"]: ImPrice;
    ["im:releaseDate"]: ImReleaseDate;
    link: Link;
    rights: Rights;
    summary: Summary;
    title: Title;
}

export interface PodcastEpisode {
    trackId: number;
    trackName: string;
    description: string;
    artworkUrl600: string;
    releaseDate: string;
    wrapperType: string;
    artistName: string;
    collectionName: string;
    episodeUrl: string;
    collectionId: string;
}

export interface PodcastDetail {
    resultCount: number;
    results: PodcastEpisode[];
}