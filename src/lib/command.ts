import type {DTO} from "./dto.ts";

export function createCommand<T extends DTO, O extends DTO>(
    handler: (dto: T) => Promise<O> | O,
) {
    return handler
}