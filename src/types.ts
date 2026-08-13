export interface BuildInfo {
  timestamp: Date;
  version: string;
  mode: 'development' | 'production';
  isDev: boolean;
}

export interface AppConfig {
  apiUrl: string;
  debugMode: boolean;
  maxRetries: number;
}

export type ElementSelector = string | HTMLElement | null;

export interface Gallery {
  images: Image[];
  currentIndex: number;
}

export interface Image {
  src: string;
  alt: string;
  title?: string;
}

export class AppError extends Error {
  constructor(
    public code: string,
    public statusCode: number = 500,
    message: string = 'An error occurred'
  ) {
    super(message);
    this.name = 'AppError';
  }
}
