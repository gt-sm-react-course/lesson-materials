import { UserApiModel } from "../types/UserApiModel";
import { mapUserApiModelToUiModel } from "../mapping/mapUserApiModelToUiModel";

describe("mapUserApiModelToUiModel", () => {
  it("should correctly map UserApiModel to UserUiModel", () => {
    const mockUserApiModel: UserApiModel = {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
    };

    const result = mapUserApiModelToUiModel(mockUserApiModel);

    expect(result.userId).toEqual(mockUserApiModel.id);
    expect(result.firstname).toEqual(mockUserApiModel.name.split(" ")[0]);
    expect(result.lastname).toEqual(mockUserApiModel.name.split(" ")[1]);
    expect(result.email).toEqual(mockUserApiModel.email);
  });

  it("should throw an error when given undefined", () => {
    expect(() => mapUserApiModelToUiModel(undefined as any)).toThrow();
  });
});
