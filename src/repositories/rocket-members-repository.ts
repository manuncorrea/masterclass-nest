export abstract class RocketMemberRepository {
  abstract create(name: string, functions: string): Promise<void>;
}
