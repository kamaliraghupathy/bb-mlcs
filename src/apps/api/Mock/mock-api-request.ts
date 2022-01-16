import {ISchoolResponseModel} from "../../Registration/result/model/result-model";

/**
 * Request the mock school data json model
 */
export async function requestSchoolMockData( ): Promise<ISchoolResponseModel> {
    return fetch('./schoolResult.json').then((response) => response.json());
}

export async function requestSchoolMockDataWithQuery(args: string): Promise<ISchoolResponseModel> {
    return fetch('./schoolResult.json').then((response) => response.json());
}