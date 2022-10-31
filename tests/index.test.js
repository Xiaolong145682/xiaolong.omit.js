import assert from 'assert';
import omit from '../src';

describe('omit', () => {
  it('should create a shallow copy', () => {
    const benjy = { name: 'Benjy' };
    const copy = omit(benjy, []);
    /** deepStrictEqual 的别名，严格模式下，深度相等的*/
    assert.deepEqual(copy, benjy);
    /**
     * notStrictEqual 的别名，严格模式下，完全不相等的
     * */
    assert.notEqual(copy, benjy);
  });

  it('should drop fields which are passed in', () => {
    const benjy = { name: 'Benjy', age: 18 };
    assert.deepEqual(omit(benjy, ['age']), { name: 'Benjy' });
    assert.deepEqual(omit(benjy, ['name', 'age']), {});
  });

  it('剔除参数有重复', () => {
    const benjy = { name: 'Benjy', age: 18 };
    assert.deepEqual(omit(benjy, ['age', 'age']), { name: 'Benjy' });
  });

  it('剔除参数有对象不存在的属性', () => {
    const benjy = { name: 'Benjy', age: 18 };
    assert.deepEqual(omit(benjy, ['age', 'height']), { name: 'Benjy' });
  });
});
