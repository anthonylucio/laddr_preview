import { seedState } from './data.js';
const KEY='laddr-state-v1';

export function clone(v){ return JSON.parse(JSON.stringify(v)); }
export function loadState(){
  try{
    const raw=localStorage.getItem(KEY);
    return raw ? {...clone(seedState), ...JSON.parse(raw)} : clone(seedState);
  }catch{ return clone(seedState); }
}
export function saveState(state){ localStorage.setItem(KEY, JSON.stringify(state)); }
export function resetState(){ localStorage.removeItem(KEY); return loadState(); }
export function uid(prefix='id'){ return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`; }
