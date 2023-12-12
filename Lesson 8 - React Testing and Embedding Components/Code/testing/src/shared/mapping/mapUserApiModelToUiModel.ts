import { UserApiModel } from "../types/UserApiModel";
import { UserUiModel } from "../types/UserUiModel";

function mapUserApiModelToUiModel(apiModel: UserApiModel): UserUiModel {
  return {
    userId: apiModel.id,
    firstname: apiModel.name.split(" ")[0],
    lastname: apiModel.name.split(" ")[1],
    email: apiModel.email,
  };
}

export { mapUserApiModelToUiModel };
