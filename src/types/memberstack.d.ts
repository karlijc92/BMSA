declare global {
  interface Window {
    MemberStack?: {
      openModal: () => void;
      onReady: Promise<void>;
      getCurrentMember: () => any;
      signUp: (data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
      }) => Promise<any>;
      logout: () => void;
    };
  }
}

export {};