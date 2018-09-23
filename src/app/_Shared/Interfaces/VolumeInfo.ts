import { IndustryIdentifier } from "./IndustryIdentifier";
import { ImageLinks } from "./ImageLinks";
import { PanelizationSummary } from "./PanelizationSummary";
import { ReadingModes } from "./ReadingModes";

export interface VolumeInfo {
  title?:               string;
  subtitle?:            string;
  authors?:             string[];
  publisher?:           string;
  publishedDate?:       string;
  description?:         string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes?:        ReadingModes;
  pageCount?:           number;
  printType?:           string;
  categories?:          string[];
  averageRating?:       number;
  ratingsCount?:        number;
  maturityRating?:      string;
  allowAnonLogging?:    boolean;
  contentVersion?:      string;
  panelizationSummary?: PanelizationSummary;
  imageLinks?:          ImageLinks;
  language?:            string;
  previewLink?:         string;
  infoLink?:            string;
  canonicalVolumeLink?: string;
}