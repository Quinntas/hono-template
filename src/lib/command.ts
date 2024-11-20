import type {DTO} from "./dto.ts";

export function createCommand<In extends DTO, Out extends DTO>(
    handler: (dto: In) => Promise<Out> | Out,
) {
    return handler
}