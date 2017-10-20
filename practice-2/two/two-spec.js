/**
 * Created by weiqiujuan on 17-10-20.
 */
describe("practice-2-two", function () {

    let collection = [
        "a", "a", "a",
        "e", "e", "e", "e", "e", "e", "e",
        "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
        "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
        "f", "f", "f", "f", "f", "f", "f", "f", "f",
        "c", "c", "c", "c", "c", "c", "c", "c",
        "g", "g", "g", "g", "g", "g", "g",
        "b", "b", "b", "b", "b", "b",
        "d-7"
    ];

    it('统计集合中相同元素的个数', function () {

        let result=count_same_elements(collection);

        expect(result).toEqual([
            {key: "a", count: 3},
            {key: "e", count: 7},
            {key: "h", count: 11},
            {key: "t", count: 20},
            {key: "f", count: 9},
            {key: "c", count: 8},
            {key: "g", count: 7},
            {key: "b", count: 6},
            {key: "d", count: 7}
        ]);
    });
});