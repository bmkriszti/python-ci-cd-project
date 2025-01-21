export interface UserData {
    username: string;
    name: string;
    honor: number;
    clan: string;
    leaderboardPosition: number;
    skills: string[];
    ranks: {
      overall: {
        rank: string;
        score: number;
      };
      [language: string]: {
        rank: string;
        score: number;
      };
    };
    codeChallenges: {
      totalAuthored: number;
      totalCompleted: number;
    };
  }
  