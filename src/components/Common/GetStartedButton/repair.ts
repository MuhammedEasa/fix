'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`;

export const ActionButton = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 6.25rem;
  background: var(--green);
  color: var(--Background);
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    background: var(--green-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: var(--white);
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 6.25rem;
  border: 1px solid var(--border);
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 6.25rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--primary-dark);
  }
`;

export const PopularSearches = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;


export const PopularTag = styled.a`
  padding: 0.4rem 1rem;
  background: var(--background-light);
  border-radius: 2rem;
  font-size: 0.875rem;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--background-dark);
    color: var(--primary);
  }
`;
