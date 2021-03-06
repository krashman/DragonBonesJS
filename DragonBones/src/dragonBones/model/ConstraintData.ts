/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2016 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
namespace dragonBones {
    /**
     * @internal
     * @private
     */
    export abstract class ConstraintData extends BaseObject {
        public order: number;
        public name: string;
        public target: BoneData;
        public bone: BoneData;
        public root: BoneData | null;

        protected _onClear(): void {
            this.order = 0;
            this.name = "";
            this.target = null as any; //
            this.bone = null as any; //
            this.root = null;
        }
    }
    /**
     * @internal
     * @private
     */
    export class IKConstraintData extends ConstraintData {
        public static toString(): string {
            return "[class dragonBones.IKConstraintData]";
        }

        public scaleEnabled: boolean;
        public bendPositive: boolean;
        public weight: number;

        protected _onClear(): void {
            super._onClear();

            this.scaleEnabled = false;
            this.bendPositive = false;
            this.weight = 1.0;
        }
    }
}