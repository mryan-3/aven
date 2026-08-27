export interface FunnelStageData {
  id: string;
  name: string;
  count: string;
  value: number; // For relative height (30 to 70)
  isActive?: boolean;
}

export const FUNNEL_STAGES: FunnelStageData[] = [
  {
    id: "initiated",
    name: "Initiated Payments",
    count: "65.2k",
    value: 65.2,
  },
  {
    id: "authorized",
    name: "Authorized Payments",
    count: "54.8k",
    value: 54.8,
  },
  {
    id: "successful",
    name: "Successful Payments",
    count: "48.6k",
    value: 48.6,
    isActive: true,
  },
  {
    id: "payouts",
    name: "Payouts to Merchants",
    count: "38.3k",
    value: 38.3,
  },
  {
    id: "completed",
    name: "Completed Transactions",
    count: "32.9k",
    value: 32.9,
  },
];
