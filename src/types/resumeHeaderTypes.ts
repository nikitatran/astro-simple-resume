export interface JsonHeaderType {
  name: string;
  tagline: string;
  resumeDownloadURL: string;
  info: InfoType[];
  links: LinkType[];
}

interface LinkType {
  URL: string;
  iconName: string;
  label: string;
}

interface InfoType {
  text: string;
  iconName: string;
  optionalURL?: string;
}
