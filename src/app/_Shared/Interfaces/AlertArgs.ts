import { AlertType } from "../Services/Alert.service";

export interface AlertArgs {
  type?: AlertType;
  title?: string;
  content?: string;
}