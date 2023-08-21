import IPost from "./IPost";

interface IPaginatedResult {
  page: number;
  results_per_page: number;
  results_size: number;
  total_results_size: number;
  total_pages: number;
  next_page: null;
  prev_page: null;
  results: IPost[];
  version: string;
  license: string;
}

export default IPaginatedResult;
