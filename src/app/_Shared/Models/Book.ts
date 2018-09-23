import { VolumeInfo } from "../Interfaces/VolumeInfo";
import { AccessInfo } from "../Interfaces/AccessInfo";
import { SaleInfo } from "../Interfaces/SaleInfo";
import { SearchInfo } from "../Interfaces/SearchInfo";

export class Book {
  public kind:       string;
  public id:         string;
  public etag:       string;
  public selfLink:   string;
  public volumeInfo: VolumeInfo;
  public saleInfo:   SaleInfo;
  public accessInfo: AccessInfo;
  public searchInfo: SearchInfo;

  // Parameterized Constructor
  constructor(kind?: string, id?: string, etag?: string, selfLink?: string, volumeInfo?: VolumeInfo, saleInfo?: SaleInfo, accessInfo?: AccessInfo, searchInfo?: SearchInfo) {
    this.id = id;
    this.kind = kind;
    this.etag = etag;
    this.selfLink = selfLink;
    this.volumeInfo = volumeInfo;
    this.saleInfo = saleInfo;
    this.accessInfo = accessInfo;
    this.searchInfo = searchInfo;
  }
}
