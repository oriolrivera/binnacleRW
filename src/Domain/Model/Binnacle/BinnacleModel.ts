export interface BinnacleModel {
    data: BinnacleItem[];
    meta: BinnacleMeta;
  }
  
  export interface BinnacleItem {
    id: number;
    attributes: {
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }
  }
  
  interface BinnacleMeta {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
  